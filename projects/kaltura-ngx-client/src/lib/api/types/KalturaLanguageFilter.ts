
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaLanguageFilterArgs  extends KalturaFilterArgs {
    codeIn? : string;
}


export class KalturaLanguageFilter extends KalturaFilter {

    codeIn : string;

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
				codeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLanguageFilter'] = KalturaLanguageFilter;