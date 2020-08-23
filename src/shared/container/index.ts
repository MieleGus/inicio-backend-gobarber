import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepositoy from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepositoy from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// import IUserTokensRepositoy from '@modules/users/repositories/IUserTokensRepositoy';
// import UserTokensRepositoy from '@modules/users/infra/typeorm/repositories/UserTokensRepositoy';

container.registerSingleton<IAppointmentsRepositoy>(
    'AppointmentsRepository',
    AppointmentsRepository,
);

container.registerSingleton<IUsersRepositoy>(
    'UsersRepository',
    UsersRepository,
);
