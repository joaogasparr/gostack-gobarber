import * as Yup from 'yup';
import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string('Name must be string').required('Name is required'),
      email: Yup.string('Email must be string')
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string('Password most be string')
        .required('Password is required')
        .min(6),
    });

    schema
      .validate(req.body)
      .catch(err => res.status(401).json({ error: err.errors }));

    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string('Name must be string'),
      email: Yup.string('Email must be string').email('Invalid email'),
      oldPassword: Yup.string('Old password most be string').min(6),
      password: Yup.string('Password most be string')
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required('Password is required') : field
        ),
      confirmPassword: Yup.string('Confirm password most be string')
        .min(6)
        .when('password', (password, field) =>
          password
            ? field
                .required('Confirm password is required')
                .oneOf([Yup.ref('password')])
            : field
        ),
    });

    schema
      .validate(req.body)
      .catch(err => res.status(401).json({ error: err.errors }));

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url', 'url_android'],
        },
      ],
    });

    return res.json({ id, name, email, avatar });
  }
}

export default new UserController();
