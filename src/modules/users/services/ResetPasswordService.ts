import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
// import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

// import User from '../infra/typeorm/entities/User';

interface IRequest {
    token: string;
    email: string;
}

@injectable()
class ResetPasswordService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('userTokensRepository')
        private userTokensRepository: IUserTokensRepository,
    ) {}

    public async execute({ token, email }: IRequest): Promise<void> {}
}

export default ResetPasswordService;
