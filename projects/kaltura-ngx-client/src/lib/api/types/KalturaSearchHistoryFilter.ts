
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSearchHistoryFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaSearchHistoryFilter extends KalturaFilter {

    

    constructor(data? : KalturaSearchHistoryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchHistoryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchHistoryFilter'] = KalturaSearchHistoryFilter;