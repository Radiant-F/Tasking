import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Demo() {
  const [data, setData] = useState([
    {
      id: 1,
      no_rekening: '012093120',
      name: 'Nama Random Satu',
      status: 'Aktif',
      bulan_rekening: '06-2023',
      pemakaian: 8,
      admin: 0,
      denda: 0,
      total_bayar: 69000,
    },
    {
      id: 2,
      no_rekening: '01293123',
      name: 'Nama Random Dua',
      status: 'Aktif',
      bulan_rekening: '06-2023',
      pemakaian: 8,
      admin: 0,
      denda: 0,
      total_bayar: 40000,
    },
    {
      id: 3,
      no_rekening: '012389127',
      name: 'Nama Random Tiga',
      status: 'Aktif',
      bulan_rekening: '06-2023',
      pemakaian: 8,
      admin: 0,
      denda: 0,
      total_bayar: 50000,
    },
  ]);

  useEffect(() => {
    const updateDenda = () => {
      const tanggalSkrng = new Date();
      const hariSkrng = tanggalSkrng.getDate();
      const apakahSkrngTgl20AtauLebih = hariSkrng >= 20;

      if (apakahSkrngTgl20AtauLebih) {
        const updatedData = data.map(item => {
          return {
            ...item,
            denda: 20000,
          };
        });

        setData(updatedData);
      }
    };

    updateDenda();
  }, []);

  return (
    <View style={{backgroundColor: 'aqua', flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Text style={{color: 'black'}}>{item.name}</Text>
              <Text style={{color: 'black'}}>Denda: Rp.{item.denda}</Text>
              <Text style={{color: 'black'}}>
                Total Bayar: Rp.{item.total_bayar + item.denda}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
});
