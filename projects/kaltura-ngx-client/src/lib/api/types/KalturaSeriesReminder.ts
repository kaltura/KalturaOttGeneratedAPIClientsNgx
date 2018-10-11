
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReminder, KalturaReminderArgs } from './KalturaReminder';

export interface KalturaSeriesReminderArgs  extends KalturaReminderArgs {
    seriesId? : string;
	seasonNumber? : number;
	epgChannelId? : number;
}


export class KalturaSeriesReminder extends KalturaReminder {

    seriesId : string;
	seasonNumber : number;
	epgChannelId : number;

    constructor(data? : KalturaSeriesReminderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeriesReminder' },
				seriesId : { type : 's' },
				seasonNumber : { type : 'n' },
				epgChannelId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSeriesReminder'] = KalturaSeriesReminder;