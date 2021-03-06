
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaIotProfileFilterArgs  extends KalturaCrudFilterArgs {
    
}


export class KalturaIotProfileFilter extends KalturaCrudFilter {

    

    constructor(data? : KalturaIotProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIotProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIotProfileFilter'] = KalturaIotProfileFilter;