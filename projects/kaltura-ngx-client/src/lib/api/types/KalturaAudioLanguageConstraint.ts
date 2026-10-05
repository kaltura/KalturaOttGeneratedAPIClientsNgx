
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaAudioLanguageConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    languageCodes? : string;
}


export class KalturaAudioLanguageConstraint extends KalturaBaseAttributeConstraint {

    languageCodes : string;

    constructor(data? : KalturaAudioLanguageConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAudioLanguageConstraint' },
				languageCodes : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAudioLanguageConstraint'] = KalturaAudioLanguageConstraint;