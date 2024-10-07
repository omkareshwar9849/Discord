"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

interface FileUploadProps{
    onChange: (url?:string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
    const fileType = value.split(".").pop();

    if(value && fileType !== 'pdf'){
        return (
            <div className="relative h-20 w-20">
                <Image
                    src={value}
                    fill
                    alt="Uploaded image"
                    sizes="100%"
                    className="rounded-full"
                />
                <button 
                    className="bg-rose-500 text-white p-1 rounded-full absolute right-0 top-0" 
                    type="button"
                    onClick={() => onChange("")}
                ><X className="h-4 w-4" /></button>
            </div>
        )
    }
    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res)=>{
                onChange(res?.[0].url);
            }}
            onUploadError={(err:Error)=>{
                console.log(err)
            }}
        />
    )
}

export default FileUpload;