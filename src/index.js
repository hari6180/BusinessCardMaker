import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import UploadService from "./service/upload_service";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";
import { memo } from "react/cjs/react.production.min";

const authService = new AuthService();
const cardRepository = new CardRepository();
const uploadService = new UploadService();
const FileInput = memo((props) => <ImageFileInput {...props} uploadService={uploadService} />);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);
