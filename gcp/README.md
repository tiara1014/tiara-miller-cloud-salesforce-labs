# GCP Labs Checklist

Goal: Provision a storage bucket, set IAM role for a demo user, and upload a sample file.

Steps completed
1. Created project `tiara-demo-project`.
2. Created storage bucket `tiara-demo-bucket-YYYYMMDD`.
3. Uploaded `sample.txt` to the bucket.
4. Configured IAM: added role `Storage Object Viewer` to `demo-user@example.com`.

Commands used (Cloud Shell)
- gcloud projects create tiara-demo-project
- gsutil mb gs://tiara-demo-bucket-YYYYMMDD/
- gsutil cp sample.txt gs://tiara-demo-bucket-YYYYMMDD/
- gcloud projects add-iam-policy-binding tiara-demo-project --member='user:demo-user@example.com' --role='roles/storage.objectViewer'

Artifacts: screenshots/1-create-project.png; screenshots/2-create-bucket.png; screenshots/3-upload-file.png; screenshots/4-iam-binding.png
