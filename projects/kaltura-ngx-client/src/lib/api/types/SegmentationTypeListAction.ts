
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSegmentationTypeListResponse } from './KalturaSegmentationTypeListResponse';

import { KalturaBaseSegmentationTypeFilter } from './KalturaBaseSegmentationTypeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SegmentationTypeListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBaseSegmentationTypeFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'segmentationType' action 'list'.
 *
 * Usage: Lists all segmentation types in group
 *
 * Server response type:         KalturaSegmentationTypeListResponse
 * Server failure response type: KalturaAPIException
 */
export class SegmentationTypeListAction extends KalturaRequest<KalturaSegmentationTypeListResponse> {

    filter : KalturaBaseSegmentationTypeFilter;
	pager : KalturaFilterPager;

    constructor(data? : SegmentationTypeListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSegmentationTypeListResponse', responseConstructor : KalturaSegmentationTypeListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'segmentationtype' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBaseSegmentationTypeFilter, subType : 'KalturaBaseSegmentationTypeFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

