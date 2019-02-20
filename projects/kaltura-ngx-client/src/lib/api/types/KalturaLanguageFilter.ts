
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaLanguageFilterArgs  extends KalturaFilterArgs {
    codeIn? : string;
	excludePartner? : boolean;
}


export class KalturaLanguageFilter extends KalturaFilter {

    codeIn : string;
	excludePartner : boolean;

    constructor(data? : KalturaLanguageFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLanguageFilter' },
				codeIn : { type : 's' },
				excludePartner : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLanguageFilter'] = KalturaLanguageFilter;