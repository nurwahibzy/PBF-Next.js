import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  getDoc,
  doc,
  addDoc,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({ status: "error", message: "User already exists" });
  } else {
    // user belum ada, jadi boleh mendaftar
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: "success",
          message: "User registered successfully",
        });
      })

      .catch((error) => {
        callback({ status: "error", message: error.message });
      });
  }
}

export async function signInWithGoogle(userData: any, callback: any) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );

    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      // user sudah terdaftar maka update data user
      userData.role = data[0].role; // pastikan role tetap sama
      await updateDoc(doc(db, "users", data[0].id), userData);
      callback({
        status: true,
        message: "user registered and logged in with Google",
      });
    } else {
      userData.role = "Member";
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: "user successfully registered  with Google",
      });
    }
  } catch (error) {
    callback({
      status: false,
      message: "Failed to register user with Google",
    });
  }
}

export async function signInWithGithub(userData: any, callback: any) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );
    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      userData.role = data[0].role;
      await updateDoc(doc(db, "users", data[0].id), userData);
      callback({
        status: true,
        message: "user registered and logged in with Github",
      });
    } else {
      userData.role = "Member";
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: "user successfully registered  with Github",
      });
    }
  } catch (error) {
    callback({
      status: false,
      message: "Failed to register user with Github",
    });
  }
}
