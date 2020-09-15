
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaSmsAdapterProfileFilterArgs  extends KalturaCrudFilterArgs {
    
}


export class KalturaSmsAdapterProfileFilter extends KalturaCrudFilter {

    

    constructor(data? : KalturaSmsAdapterProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSmsAdapterProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSmsAdapterProfileFilter'] = KalturaSmsAdapterProfileFilter;