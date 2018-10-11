
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDevicePinArgs  extends KalturaObjectBaseArgs {
    pin? : string;
}


export class KalturaDevicePin extends KalturaObjectBase {

    pin : string;

    constructor(data? : KalturaDevicePinArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDevicePin' },
				pin : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDevicePin'] = KalturaDevicePin;