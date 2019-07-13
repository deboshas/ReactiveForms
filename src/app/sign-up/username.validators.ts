import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNamevalidators {

    static cannotContainSpace(control: AbstractControl) {


        if ((control.value as string).indexOf(' ') > 0) {

            return { cannotContainSpace: true };

        }
        else {
            return null;
        }


    }


}