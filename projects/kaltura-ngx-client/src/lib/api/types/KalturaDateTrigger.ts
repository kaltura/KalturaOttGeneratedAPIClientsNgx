
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTrigger, KalturaTriggerArgs } from './KalturaTrigger';

export interface KalturaDateTriggerArgs  extends KalturaTriggerArgs {
    date? : number;
}


export class KalturaDateTrigger extends KalturaTrigger {

    date : number;

    constructor(data? : KalturaDateTriggerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDateTrigger' },
				date : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDateTrigger'] = KalturaDateTrigger;