import bcrypt from "bcryptjs";
import { Credential } from "ts-models";
import credentialModel from "../models/credential";
import { Profile } from "ts-models";
import ProfileModel from "../models/profile";

function verify(email: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        credentialModel
            .find({ email })
            .then((found) => {
                if (found && found.length === 1) return found[0];
                else reject("Invalid username or password");
            })
            .then(async (credsOnFile) => {
                if (credsOnFile) {
                    const isValid = await bcrypt.compare(password, credsOnFile.hashedPassword);
                    if (isValid) {
                        console.log("Verified", isValid, credsOnFile.email);
                        resolve(credsOnFile.email);
                    }
                    else {
                        reject("Invalid username or password");
                    }
                }
                else reject("Invalid username or password");
            });
        })
}

export async function createCredential(email: string, password: string, name: string): Promise<Credential> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const credential = new credentialModel({ email, hashedPassword });
    console.log("credential", credential)
    // Create profile for all new users as well
    const p = new ProfileModel({email, name});
    await p.save();

    return await credential.save();
}

export default { verify, createCredential };