import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: [true, "Bu kullanıcı ismi zaten kullanımda."],
      required: [true, "Lütfen username alanını belirleyin."],
    },
    email: {
      type: String,
      unique: [true, "Girmiş olduğunuz email zaten kullanımda."],
      required: [true, "Lütfen email alanını belirleyin."],
    },
    password: {
      type: String,
      required: [true, "Lütfen şifre alanını belirleyin."],
    },
    country: {
      type: String,
      required: [true, "Lütfen Bulundğunuz ülke ismini giriniz belirleyin."],
    },
    profilePicture: {
      type: String,
      default: "default",
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, ret: any) {
        delete ret.password;
        return ret;
      },
    },
  },
);

const User = model("User", userSchema);
export default User;
