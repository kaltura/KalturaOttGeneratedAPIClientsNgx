
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFollowDataBase, KalturaFollowDataBaseArgs } from './KalturaFollowDataBase';

export interface KalturaFollowTvSeriesArgs  extends KalturaFollowDataBaseArgs {
    assetId? : number;
}


export class KalturaFollowTvSeries extends KalturaFollowDataBase {

    assetId : number;

    constructor(data? : KalturaFollowTvSeriesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFollowTvSeries' },
				assetId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFollowTvSeries'] = KalturaFollowTvSeries;