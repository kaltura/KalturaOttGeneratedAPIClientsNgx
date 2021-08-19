
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByVideoCodec, KalturaFilterFileByVideoCodecArgs } from './KalturaFilterFileByVideoCodec';

export interface KalturaFilterFileByVideoCodecInPlaybackArgs  extends KalturaFilterFileByVideoCodecArgs {
    
}


export class KalturaFilterFileByVideoCodecInPlayback extends KalturaFilterFileByVideoCodec {

    

    constructor(data? : KalturaFilterFileByVideoCodecInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByVideoCodecInPlayback' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByVideoCodecInPlayback'] = KalturaFilterFileByVideoCodecInPlayback;