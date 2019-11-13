
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCrudFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaCrudFilter extends KalturaFilter {

    

    constructor(data? : KalturaCrudFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrudFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCrudFilter'] = KalturaCrudFilter;