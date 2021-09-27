
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLineupNotificationSettingsArgs  extends KalturaObjectBaseArgs {
    enabled? : boolean;
}


export class KalturaLineupNotificationSettings extends KalturaObjectBase {

    enabled : boolean;

    constructor(data? : KalturaLineupNotificationSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLineupNotificationSettings' },
				enabled : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLineupNotificationSettings'] = KalturaLineupNotificationSettings;