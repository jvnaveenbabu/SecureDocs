const en_US = {
  language_name: "English",

  // Menu
  sub_title: "Encrypt And Decrypt",
  home: "home",
  about: "about",

  // About page menu
  introduction: "Introduction",
  features: "Features",
  installation: "Installation",
  usage: "Usage",
  limitations: "Limitations",
  best_practices: "Best-Practices",
  faq: "FAQ",
  technical_details: "Technical-Details",
  changelog: "Changelog",

  // Settings
  settings: "Settings",
  language: "Language",
  change_language: "Change display language",
  change_appearance: "Change appearance",
  language_changed: "Language changed! - Page reload is needed to take effect.",
  help_translate:
    "Can't find your language? you can help translate this app by following the translation guide on github.",
  reload: "RELOAD",
  dark_mode: "Dark Mode",
  close: "Close",
  reset: "Reset",
  guide: "Guide",

  // Common
  file: "file",
  files: "files",
  password: "Password",
  public_key: "Public key",
  private_key: "Private key",
  drag_drop: "Drag & Drop or Browse file",
  drag_drop_files: "Drag & Drop or Browse files",
  browse_file: "Browse File",
  browse_files: "Browse Files",
  change_file: "Change File",
  add_files: "Add Files",
  next: "Next",
  back: "Back",
  error: "Error",
  required: "Required",
  success: "Success",
  show_password: "Show Password",
  copy_password: "Copy Password",
  password_copied: "Password copied!",
  show_private_key: "Show Private Key",
  load_public_key: "Load Public Key",
  load_private_key: "Load Private Key",
  short_password:
    "Please enter a password with a minimum length of 12 characters. Or generate one.",
  wrong_public_key: "Wrong Public Key",
  wrong_private_key: "Wrong Private Key",
  invalid_keys_input: "Invalid keys input.",
  invalid_key_pair:
    "This key pair is invalid! Please select keys for different parties.",
  ready_to_download: "was loaded successfully and ready to download!",
  files_ready_to_download:
    "files were loaded successfully and ready to download!",
  downloading_file: "Downloading...",
  checking_file: "Checking file...",
  page_close_alert: "Don't close the page while files are downloading!",
  offline_note: "",

  // Password Strength Check
  very_weak: "Very Weak (guessable)",
  weak: "Weak",
  moderate: "Moderate",
  good: "Good",
  strong: "Strong",
  crackTimeEstimation: "crack time estimation:",
  less_second: "less than a second",
  seconds: "seconds",
  minutes: "minutes",
  hours: "hours",
  days: "days",
  months: "months",
  years: "years",
  centuries: "centuries",

  // Encryption
  encryption: "Encryption",
  drop_file_enc: "Drop files to encrypt",
  choose_files_enc: "Choose files to encrypt",
  enter_password_enc: "Enter a password",
  enter_keys_enc: "Enter recipient's Public key and your Private Key",
  password_strength: "Password strength",
  choose_strong_password: "Choose a strong Password",
  generate_password: "Generate Password",
  recipient_public_key: "Recipient's Public Key",
  enter_recipient_public_key: "Enter recipient's public key",
  your_private_key_enc: "Your Private Key",
  enter_private_key_enc: "Enter your private key",
  encrypted_files: "Encrypted Files",
  download_encrypted_files: "Download encrypted files",
  success_downloaded_files_enc:
    "You have successfully downloaded the encrypted files!",
  encrypt_more_files: "Encrypt More Files",
  create_shareable_link: "Create shareable link",
  create_shareable_link_tooltip: "Create a link that has your public key",
  create_shareable_link_note: "This link was generated offline.",
  create_shareable_link_copied: "Shareable link copied!",
  copy_link: "Copy link",
  after_enc_note_one:
    "You must share this file along with your public key in order for the recipient to decrypt it.",
  after_enc_note_two:
    "You can create a link that has your public key so you do not have to send your public key and worry about the recipient entering it.",
  testing_password: "Testing Password...",
  testing_keys: "Testing Keys...",

  // Decrypion
  decryption: "Decryption",
  drop_file_dec: "Drop files to decrypt",
  choose_files_dec: "Choose files to decrypt",
  sender_key_loaded:
    "Sender's public key is loaded, please select the encrypted file.",
  recipient_key_loaded:
    "Recipient's public key is loaded, please select a file to encrypt.",
  file_not_encrypted_corrupted:
    "This file was not encrypted using hat.sh or the file may be corrupted!",
  old_version:
    "This file was encrypted using an older version of hat.sh, you can decrypt this file by visiting the v1 app.",
  file_mixup:
    "Files selected for decryption have to be encrypted using the same method, either by password or public key. Choose files that match.",
  enter_password_dec: "Enter the decryption password",
  enter_keys_dec: "Enter sender's Public key and your Private Key",
  wrong_password: "Wrong Password",
  file_has_wrong_password:
    "has a wrong password, password testing stopped, make sure all files have the same correct decryption password.",
  file_has_wrong_keys:
    "has wrong keys, keys testing stopped, make sure all files have the same correct decryption keys.",
  sender_public_key: "Sender's Public Key",
  enter_sender_public_key: "Enter sender's public key",
  your_private_key_dec: "Your Private Key",
  enter_private_key_dec: "Enter your private key",
  decrypted_files: "Decrypted Files",
  download_decrypted_files: "Download decrypted files",
  success_downloaded_files_dec:
    "You have successfully downloaded the decrypted files!",
  decrypt_other_files: "Decrypt Other Files",

  // Limited
  choose_file_enc: "Choose a file to encrypt",
  choose_file_dec: "Choose a file to decrypt",
  encrypted_file: "Encrypted File",
  decrypted_file: "Decrypted File",
  download_encrypted_file: "Download encrypted file",
  download_decrypted_file: "Download decrypted file",
  success_downloaded_file_enc:
    "You have successfully downloaded the encrypted file!",
  success_downloaded_file_dec:
    "You have successfully downloaded the decrypted file!",
  encrypt_another_file: "Encrypt Another File",
  decrypt_another_file: "Decrypt Another File",
  limited_safari: "Safari browsers have limited experience (single file, 1GB)",
  limited_mobile: "Mobile browsers have limited experience (single file, 1GB)",
  limited_private:
    "You have limited experience (single file, 1GB) due to Private browsing.",
  file_too_big: "File is too big!",
  choose_file_1gb: "Choose a file up to 1GB.",
  encrypt_file: "Encrypt file",
  encrypting_file: "Encrypting...",
  decrypting_file: "Decrypting...",
  page_close_alert_enc: "Don't close the page while the file is encrypting!",
  success_encrypted: "The file was successfully encrypted!",
  page_close_alert_dec: "Don't close the page while the file is decrypting!",
  success_decrypted: "The file was successfully decrypted!",
  download_file: "Download File",

  // Keypair generation panel
  generate_now_button: "Generate now",
  generate_key_pair_button: "Generate Key Pair",
  generate_another_key_pair_button: "Generate Another Pair",
  key_pair_question: "Don't have public/private keys?",
  key_pair_generation_title: "Public/Private key pair generation:",
  download_public_key: "Download Public Key",
  download_private_key: "Download Private Key",
  generate_public_key: "Generate public key",
  generate_private_key: "Generate private key",
  show_private_key: "Show Private Key",
  why_need_private_key: "",
  private_key_notice:
    "Never share your private key to anyone! Only public keys should be exchanged.",
};

export default en_US;
