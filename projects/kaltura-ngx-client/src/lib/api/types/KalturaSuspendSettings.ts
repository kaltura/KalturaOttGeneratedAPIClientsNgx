
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSuspendSettingsArgs  extends KalturaObjectBaseArgs {
    revokeEntitlements? : boolean;
	stopRenew? : boolean;
}


export class KalturaSuspendSettings extends KalturaObjectBase {

    revokeEntitlements : boolean;
	stopRenew : boolean;

    constructor(data? : KalturaSuspendSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSuspendSettings' },
				revokeEntitlements : { type : 'b' },
				stopRenew : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSuspendSettings'] = KalturaSuspendSettings;