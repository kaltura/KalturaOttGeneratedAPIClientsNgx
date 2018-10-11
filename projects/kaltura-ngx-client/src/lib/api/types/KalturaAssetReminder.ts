
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReminder, KalturaReminderArgs } from './KalturaReminder';

export interface KalturaAssetReminderArgs  extends KalturaReminderArgs {
    assetId? : number;
}


export class KalturaAssetReminder extends KalturaReminder {

    assetId : number;

    constructor(data? : KalturaAssetReminderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetReminder' },
				assetId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetReminder'] = KalturaAssetReminder;