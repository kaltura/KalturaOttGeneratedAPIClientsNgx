
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReminderFilter, KalturaReminderFilterArgs } from './KalturaReminderFilter';

export interface KalturaAssetReminderFilterArgs  extends KalturaReminderFilterArgs {
    
}


export class KalturaAssetReminderFilter extends KalturaReminderFilter {

    

    constructor(data? : KalturaAssetReminderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetReminderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetReminderFilter'] = KalturaAssetReminderFilter;