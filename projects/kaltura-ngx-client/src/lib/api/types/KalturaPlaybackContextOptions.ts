
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaybackContextType } from './KalturaPlaybackContextType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackContextOptionsArgs  extends KalturaObjectBaseArgs {
    mediaProtocol? : string;
	streamerType? : string;
	assetFileIds? : string;
	context? : KalturaPlaybackContextType;
}


export class KalturaPlaybackContextOptions extends KalturaObjectBase {

    mediaProtocol : string;
	streamerType : string;
	assetFileIds : string;
	context : KalturaPlaybackContextType;

    constructor(data? : KalturaPlaybackContextOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackContextOptions' },
				mediaProtocol : { type : 's' },
				streamerType : { type : 's' },
				assetFileIds : { type : 's' },
				context : { type : 'es', subTypeConstructor : KalturaPlaybackContextType, subType : 'KalturaPlaybackContextType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlaybackContextOptions'] = KalturaPlaybackContextOptions;