
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadJobStatus } from './KalturaBulkUploadJobStatus';
import { KalturaBulkUploadJobAction } from './KalturaBulkUploadJobAction';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
import { KalturaMessage } from './KalturaMessage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkUpload extends KalturaObjectBase {

    readonly id : number;
	readonly fileName : string;
	readonly status : KalturaBulkUploadJobStatus;
	readonly action : KalturaBulkUploadJobAction;
	readonly numOfObjects : number;
	readonly createDate : number;
	readonly updateDate : number;
	readonly uploadedByUserId : number;
	readonly results : KalturaBulkUploadResult[];
	readonly errors : KalturaMessage[];

    constructor(data? : KalturaBulkUploadArgs)
    {
        super(data);
        if (typeof this.results === 'undefined') this.results = [];
		if (typeof this.errors === 'undefined') this.errors = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUpload' },
				id : { type : 'n', readOnly : true },
				fileName : { type : 's', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaBulkUploadJobStatus, subType : 'KalturaBulkUploadJobStatus' },
				action : { type : 'es', readOnly : true, subTypeConstructor : KalturaBulkUploadJobAction, subType : 'KalturaBulkUploadJobAction' },
				numOfObjects : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				uploadedByUserId : { type : 'n', readOnly : true },
				results : { type : 'a', readOnly : true, subTypeConstructor : KalturaBulkUploadResult, subType : 'KalturaBulkUploadResult' },
				errors : { type : 'a', readOnly : true, subTypeConstructor : KalturaMessage, subType : 'KalturaMessage' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUpload'] = KalturaBulkUpload;