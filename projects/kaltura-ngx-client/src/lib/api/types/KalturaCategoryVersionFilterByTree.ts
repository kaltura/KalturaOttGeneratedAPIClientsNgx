
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryVersionState } from './KalturaCategoryVersionState';
import { KalturaCategoryVersionFilter, KalturaCategoryVersionFilterArgs } from './KalturaCategoryVersionFilter';

export interface KalturaCategoryVersionFilterByTreeArgs  extends KalturaCategoryVersionFilterArgs {
    treeIdEqual? : number;
	stateEqual? : KalturaCategoryVersionState;
}


export class KalturaCategoryVersionFilterByTree extends KalturaCategoryVersionFilter {

    treeIdEqual : number;
	stateEqual : KalturaCategoryVersionState;

    constructor(data? : KalturaCategoryVersionFilterByTreeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryVersionFilterByTree' },
				treeIdEqual : { type : 'n' },
				stateEqual : { type : 'es', subTypeConstructor : KalturaCategoryVersionState, subType : 'KalturaCategoryVersionState' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryVersionFilterByTree'] = KalturaCategoryVersionFilterByTree;