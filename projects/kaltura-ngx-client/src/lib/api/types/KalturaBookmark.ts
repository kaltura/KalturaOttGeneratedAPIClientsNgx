
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPositionOwner } from './KalturaPositionOwner';
import { KalturaBookmarkPlayerData } from './KalturaBookmarkPlayerData';
import { KalturaPlaybackContextType } from './KalturaPlaybackContextType';
import { KalturaSlimAsset, KalturaSlimAssetArgs } from './KalturaSlimAsset';

export interface KalturaBookmarkArgs  extends KalturaSlimAssetArgs {
    position? : number;
	playerData? : KalturaBookmarkPlayerData;
	programId? : number;
	isReportingMode? : boolean;
	context? : KalturaPlaybackContextType;
}


export class KalturaBookmark extends KalturaSlimAsset {

    readonly userId : string;
	position : number;
	readonly positionOwner : KalturaPositionOwner;
	readonly finishedWatching : boolean;
	playerData : KalturaBookmarkPlayerData;
	programId : number;
	isReportingMode : boolean;
	context : KalturaPlaybackContextType;

    constructor(data? : KalturaBookmarkArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBookmark' },
				userId : { type : 's', readOnly : true },
				position : { type : 'n' },
				positionOwner : { type : 'es', readOnly : true, subTypeConstructor : KalturaPositionOwner, subType : 'KalturaPositionOwner' },
				finishedWatching : { type : 'b', readOnly : true },
				playerData : { type : 'o', subTypeConstructor : KalturaBookmarkPlayerData, subType : 'KalturaBookmarkPlayerData' },
				programId : { type : 'n' },
				isReportingMode : { type : 'b' },
				context : { type : 'es', subTypeConstructor : KalturaPlaybackContextType, subType : 'KalturaPlaybackContextType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBookmark'] = KalturaBookmark;