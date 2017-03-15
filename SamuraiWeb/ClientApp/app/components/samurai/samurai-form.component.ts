import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import {Samurai} from "./samurai.model"

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}

function ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        };
        return null;
    };
}

@Component({
    selector: 'samurai-form',
    templateUrl: 'samurai-form.component.html'
})
export class SamuraiFormComponent implements OnInit {
    samuraiForm: FormGroup; //form model
    formErrors = {
        name: '',
        username: ''
    };
    samurai: Samurai = new Samurai();
//https://app.pluralsight.com/player?course=angular-2-reactive-forms&author=deborah-kurata&name=angular-2-reactive-forms-m3&clip=5&mode=live
    validationMessages = {
        name: {
            required: 'Name is required.',
            minlength: 'Name must be 3 characters.',
            maxlength: 'Name can\'t be longer than 6 characters.'
        },
        username: {
            required: 'Username is required.',
            minlength: 'Username must be 3 characters.'
        }
    };

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        // build the data model for our form
        this.buildForm();
    }

    buildForm() {
        // build our form
        this.samuraiForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            emailGroup: this.formBuilder.group({
                email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
                confirmEmail: ['', Validators.required]
            }, { validator: emailMatcher }),
            phone: '',
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
            sendCatalog: true
        });

        // watch for changes and validate
        //this.samuraiForm.valueChanges.subscribe(data => this.validateForm());
    }

    validateForm() {
        for (let field in this.formErrors) {
            // clear that input field errors
            this.formErrors[field] = '';

            // grab an input field by name
            let input = this.samuraiForm.get(field);

            if (input.invalid && input.dirty) {
                // figure out the type of error
                // loop over the formErrors field names
                for (let error in input.errors) {
                    // assign that type of error message to a variable
                    this.formErrors[field] = this.validationMessages[field][error];
                }
            }
        }
    }

    processForm() {
        console.log('processing', this.samuraiForm.value);
    }

    save() {
        console.log(this.samuraiForm);
        console.log('Saved: ' + JSON.stringify(this.samuraiForm.value));
    }

    populateTestData(): void {
        this.samuraiForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            sendCatalog: false
        });

        //this.samuraiForm.setValue({
        //    firstName: 'Jack',
        //    lastName: 'Harkness',
        //    email: 'jack@torchwood.com'
        //});
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.samuraiForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
}