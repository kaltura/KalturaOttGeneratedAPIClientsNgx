
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseChannelArgs  extends KalturaObjectBaseArgs {
    name? : string;
}


export class KalturaBaseChannel extends KalturaObjectBase {

    readonly id : number;
	name : string;

    constructor(data? : KalturaBaseChannelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseChannel' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseChannel'] = KalturaBaseChannel;