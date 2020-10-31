
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmPlaybackPluginData } from './KalturaDrmPlaybackPluginData';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaMediaFile, KalturaMediaFileArgs } from './KalturaMediaFile';

export interface KalturaPlaybackSourceArgs  extends KalturaMediaFileArgs {
    format? : string;
	protocols? : string;
	drm? : KalturaDrmPlaybackPluginData[];
	isTokenized? : boolean;
}


export class KalturaPlaybackSource extends KalturaMediaFile {

    format : string;
	protocols : string;
	drm : KalturaDrmPlaybackPluginData[];
	isTokenized : boolean;
	readonly businessModuleId : number;
	readonly businessModuleType : KalturaTransactionType;

    constructor(data? : KalturaPlaybackSourceArgs)
    {
        super(data);
        if (typeof this.drm === 'undefined') this.drm = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackSource' },
				format : { type : 's' },
				protocols : { type : 's' },
				drm : { type : 'a', subTypeConstructor : KalturaDrmPlaybackPluginData, subType : 'KalturaDrmPlaybackPluginData' },
				isTokenized : { type : 'b' },
				businessModuleId : { type : 'n', readOnly : true },
				businessModuleType : { type : 'es', readOnly : true, subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlaybackSource'] = KalturaPlaybackSource;