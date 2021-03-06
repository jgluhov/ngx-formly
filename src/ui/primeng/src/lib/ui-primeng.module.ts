import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyInputModule } from '@ngx-formly/primeng/input';
import { FormlyTextAreaModule } from '@ngx-formly/primeng/textarea';
import { FormlyRadioModule } from '@ngx-formly/primeng/radio';
import { FormlyCheckboxModule } from '@ngx-formly/primeng/checkbox';
import { FormlySelectModule } from '@ngx-formly/primeng/select';
import { FormlyDatePickerModule } from '@ngx-formly/primeng/datepicker';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyDatePickerModule,
  ],
})
export class FormlyPrimeNGModule {}
