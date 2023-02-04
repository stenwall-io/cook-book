import { Schema, Model, model, models } from 'mongoose';

export interface IUser {
  _id: Schema.Types.ObjectId;
  username: string;
  password: string;
  realName: string;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  realName: {
    type: String,
    required: true,
    trim: true,
  },
});

export default (models.User as Model<IUser>) ||
  model<IUser>('User', UserSchema);
