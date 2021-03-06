
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegionChannelNumberArgs  extends KalturaObjectBaseArgs {
    regionId? : number;
	channelNumber? : number;
}


export class KalturaRegionChannelNumber extends KalturaObjectBase {

    regionId : number;
	channelNumber : number;

    constructor(data? : KalturaRegionChannelNumberArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionChannelNumber' },
				regionId : { type : 'n' },
				channelNumber : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRegionChannelNumber'] = KalturaRegionChannelNumber;