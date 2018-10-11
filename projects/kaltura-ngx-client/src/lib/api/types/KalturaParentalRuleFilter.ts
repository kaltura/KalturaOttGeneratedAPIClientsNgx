
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaParentalRuleFilterArgs  extends KalturaFilterArgs {
    entityReferenceEqual? : KalturaEntityReferenceBy;
}


export class KalturaParentalRuleFilter extends KalturaFilter {

    entityReferenceEqual : KalturaEntityReferenceBy;

    constructor(data? : KalturaParentalRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaParentalRuleFilter' },
				entityReferenceEqual : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaParentalRuleFilter'] = KalturaParentalRuleFilter;