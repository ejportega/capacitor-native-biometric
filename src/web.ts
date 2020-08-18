import { WebPlugin } from "@capacitor/core";
import {
  NativeBiometricPlugin,
  AvailableResult,
  BiometricOptions,
  GetCredentialOptions,
  SetCredentialOptions,
  DeleteCredentialOptions,
  NotImplementedError,
} from "./definitions";

export class NativeBiometricWeb extends WebPlugin
  implements NativeBiometricPlugin {
  constructor() {
    super({
      name: "NativeBiometric",
      platforms: ["web"],
    });
  }
  isAvailable(): Promise<AvailableResult> {
    throw new NotImplementedError("Method not implemented.");
  }

  verifyIdentity(options?: BiometricOptions): Promise<any> {
    console.log(options);

    throw new NotImplementedError("Method not implemented.");
  }
  getCredentials(
    options: GetCredentialOptions
  ): Promise<import("./definitions").Credentials> {
    console.log(options);

    throw new NotImplementedError("Method not implemented.");
  }
  setCredentials(options: SetCredentialOptions): Promise<any> {
    console.log(options);

    throw new NotImplementedError("Method not implemented.");
  }
  deleteCredentials(options: DeleteCredentialOptions): Promise<any> {
    console.log(options);

    throw new NotImplementedError("Method not implemented.");
  }
}

const NativeBiometric = new NativeBiometricWeb();

export { NativeBiometric };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(NativeBiometric);
