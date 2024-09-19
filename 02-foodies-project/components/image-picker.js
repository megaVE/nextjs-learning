"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef(null);

  const [pickedImage, setPickedImage] = useState(null);

  const handlePickImage = (e) => {
    const file = e.target.files[0];

    if (!file) return setPickedImage(null);

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.controls}>
        <div className={styles.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="Selected image" fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handlePickImage}
          required
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => imageInputRef?.current?.click()}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
