
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCaptionPlaybackPluginDataArgs  extends KalturaObjectBaseArgs {
    url? : string;
	language? : string;
	label? : string;
	format? : string;
}


export class KalturaCaptionPlaybackPluginData extends KalturaObjectBase {

    url : string;
	language : string;
	label : string;
	format : string;

    constructor(data? : KalturaCaptionPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionPlaybackPluginData' },
				url : { type : 's' },
				language : { type : 's' },
				label : { type : 's' },
				format : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCaptionPlaybackPluginData'] = KalturaCaptionPlaybackPluginData;