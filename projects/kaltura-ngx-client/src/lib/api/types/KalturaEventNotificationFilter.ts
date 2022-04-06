
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaEventNotificationFilterArgs  extends KalturaFilterArgs {
    idEqual? : string;
	objectIdEqual? : number;
	eventObjectTypeEqual? : string;
}


export class KalturaEventNotificationFilter extends KalturaFilter {

    idEqual : string;
	objectIdEqual : number;
	eventObjectTypeEqual : string;

    constructor(data? : KalturaEventNotificationFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationFilter' },
				idEqual : { type : 's' },
				objectIdEqual : { type : 'n' },
				eventObjectTypeEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEventNotificationFilter'] = KalturaEventNotificationFilter;