
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSlimAsset } from './KalturaSlimAsset';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaStreamingDeviceArgs  extends KalturaObjectBaseArgs {
    udid? : string;
}


export class KalturaStreamingDevice extends KalturaObjectBase {

    readonly asset : KalturaSlimAsset;
	readonly userId : string;
	udid : string;

    constructor(data? : KalturaStreamingDeviceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStreamingDevice' },
				asset : { type : 'o', readOnly : true, subTypeConstructor : KalturaSlimAsset, subType : 'KalturaSlimAsset' },
				userId : { type : 's', readOnly : true },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaStreamingDevice'] = KalturaStreamingDevice;