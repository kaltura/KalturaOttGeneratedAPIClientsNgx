
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPlaybackProfileFilterArgs  extends KalturaFilterArgs {
    playbackProfileEqual? : number;
}


export class KalturaPlaybackProfileFilter extends KalturaFilter {

    playbackProfileEqual : number;

    constructor(data? : KalturaPlaybackProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackProfileFilter' },
				playbackProfileEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlaybackProfileFilter'] = KalturaPlaybackProfileFilter;