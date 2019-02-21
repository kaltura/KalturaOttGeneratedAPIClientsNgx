
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCurrencyFilterArgs  extends KalturaFilterArgs {
    codeIn? : string;
}


export class KalturaCurrencyFilter extends KalturaFilter {

    codeIn : string;

    constructor(data? : KalturaCurrencyFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCurrencyFilter' },
				codeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCurrencyFilter'] = KalturaCurrencyFilter;