import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class FormControlValidationService {
  constructor(private _translationService: TranslocoService) {}

  public getErrorMessage(
    errorKey: string,
    field: string,
    args: { [key: string]: string | number } | null | boolean
  ): string {
    switch (errorKey) {
      case 'alpha':
        return this._translationService.translate('common.errors.alpha', {
          field,
        });
      case 'alpha_num':
        return this._translationService.translate('common.errors.alpha_num', {
          field,
        });
      case 'alpha_dash':
        return this._translationService.translate('common.errors.alpha_dash', {
          field,
        });
      case 'alpha_spaces':
        return this._translationService.translate(
          'common.errors.alpha_spaces',
          { field }
        );
      case 'between':
        return this._translationService.translate('common.errors.between', {
          field,
        });
      case 'confirmed':
        return this._translationService.translate('common.errors.confirmed', {
          field,
        });
      case 'digits':
        return this._translationService.translate('common.errors.digits', {
          field,
        });
      case 'dimensions':
        return this._translationService.translate('common.errors.dimensions', {
          field,
        });
      case 'email':
        return this._translationService.translate('common.errors.email', {
          field,
        });
      case 'excluded':
        return this._translationService.translate('common.errors.excluded', {
          field,
        });
      case 'ext':
        return this._translationService.translate('common.errors.ext', {
          field,
        });
      case 'image':
        return this._translationService.translate('common.errors.image', {
          field,
        });
      case 'integer':
        return this._translationService.translate('common.errors.integer', {
          field,
        });
      case 'is_not':
        return this._translationService.translate('common.errors.is_not', {
          field,
        });
      case 'length':
        return this._translationService.translate('common.errors.length', {
          field,
          length: typeof args !== 'boolean' ? args?.['length'] : null,
        });
      case 'max_value':
        return this._translationService.translate('common.errors.max_value', {
          field,
        });
      case 'max':
        return this._translationService.translate('common.errors.max', {
          field,
        });
      case 'mimes':
        return this._translationService.translate('common.errors.mimes', {
          field,
        });
      case 'min_value':
        return this._translationService.translate('common.errors.min_value', {
          field,
        });
      case 'min':
        return this._translationService.translate('common.errors.min', {
          field,
        });
      case 'numeric':
        return this._translationService.translate('common.errors.numeric', {
          field,
        });
      case 'one_of':
        return this._translationService.translate('common.errors.one_of', {
          field,
        });
      case 'regex':
        if (typeof args !== 'boolean' && args?.['suggestion']) {
          return this._translationService.translate(
            'common.errors.regexWithSuggestion',
            { field, suggestion: args['suggestion'] }
          );
        }
        return this._translationService.translate('common.errors.regex', {
          field,
        });
      case 'required':
        return this._translationService.translate('common.errors.required', {
          field,
        });
      case 'required_if':
        return this._translationService.translate('common.errors.required_if', {
          field,
        });
      case 'size':
        return this._translationService.translate('common.errors.size', {
          field,
        });
      case 'dateIsBefore':
        return this._translationService.translate(
          'common.errors.dateIsBefore',
          {
            field,
            comparisonField:
              typeof args !== 'boolean' ? args?.['comparisonField'] : 'Data',
          }
        );
      default:
        return this._translationService.translate('common.errors.generic');
    }
  }
}
