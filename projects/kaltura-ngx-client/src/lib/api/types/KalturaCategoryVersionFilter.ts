
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaCategoryVersionFilterArgs  extends KalturaCrudFilterArgs {
    
}


export class KalturaCategoryVersionFilter extends KalturaCrudFilter {

    

    constructor(data? : KalturaCategoryVersionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryVersionFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryVersionFilter'] = KalturaCategoryVersionFilter;