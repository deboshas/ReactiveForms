import { ValidatorFn, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNamevalidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {


        if ((control.value as string).indexOf(' ') > 0) {

            return { cannotContainSpace: true };

        }
        else {
            return null;
        }


    }

    static UniqueUserName(control: AbstractControl)
        : Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                if (control.value === 'mosh') {

                    resolve({ unique: true });

                }
                else {
                    resolve(null);

                }

            }, 2000)

        });

    }




}