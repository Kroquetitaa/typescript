"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const camera_1 = require("@capacitor/camera");
const takePicture = () => __awaiter(void 0, void 0, void 0, function* () {
    const image = yield camera_1.Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: camera_1.CameraResultType.Base64,
        direction: camera_1.CameraDirection.Front,
    });
});
