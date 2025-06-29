
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryTree } from './KalturaCategoryTree';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryTreeGetByVersionActionArgs  extends KalturaRequestArgs {
    versionId? : number;
	deviceFamilyId? : number;
	filter? : boolean;
}

/**
 * Build request payload for service 'categoryTree' action 'getByVersion'.
 *
 * Usage: Retrieve default category tree of deviceFamilyId by KS or specific one if versionId is set
 *
 * Server response type:         KalturaCategoryTree
 * Server failure response type: KalturaAPIException
 */
export class CategoryTreeGetByVersionAction extends KalturaRequest<KalturaCategoryTree> {

    versionId : number;
	deviceFamilyId : number;
	filter : boolean;

    constructor(data? : CategoryTreeGetByVersionActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryTree', responseConstructor : KalturaCategoryTree  });
        if (typeof this.filter === 'undefined') this.filter = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categorytree' },
				action : { type : 'c', default : 'getByVersion' },
				versionId : { type : 'n' },
				deviceFamilyId : { type : 'n' },
				filter : { type : 'b' }
            }
        );
        return result;
    }
}

